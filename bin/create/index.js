const inquirer = require('inquirer');
const copydir = require('copy-dir');
const replaceTermsInFiles = require('replace-terms-in-files');

inquirer
  .prompt([
    {
      type: "list",
      name: "kind",
      message: "What you need to create?",
      choices: ["an Atom", "a molecule", "an organism", "a page"],
      filter: val => {
        switch (val) {
        case "a molecule":
          return "molecule";
        case "an organism":
          return "organism";
        case "a page":
          return "page";
        case "an Atom":
        default:
          return "atom";
        }
      }
    },
    {
      type: "input",
      name: "name",
      message: "What is the full name for it?\n(you can use spaces here)"
    },
    {
      type: "input",
      name: "description",
      // message: "Want to add a description to it?\n(use quotes or \\ to add multiple lines)"
      message: "Any description/comment about this component"
    },
  ])
  .then(async answers => {
    // Use user feedback for... whatever!!
    const { name, kind, description } = answers;
    let CamelName = camelize(removeDiacritics(name.replace(/[_-]/g, ' '), ' '));
    CamelName = CamelName[0].toUpperCase() + CamelName.substring(1);
    const upperKind = kind[0].toUpperCase() + kind.substring(1);
    const replacements = {
      name,
      kind,
      CamelName,
      upperKind,
      description: description || "<!-- TODO: add a description here! -->"
    };
    replacements['dashed-name'] = slugfy(name);

    const targetPath = `./components/${kind}s/${replacements['dashed-name']}/`;

    copydir('./bin/create/model/sample', targetPath, {
      utimes: true,  // keep add time and modify time
      mode: true,    // keep file mode
      cover: true    // cover file when exists, default is true
    }, async function(err) {
      if(err) {
        console.error('Failed copying the model!');
        throw err;
      }

      const status = await replaceTermsInFiles({
        targets: [targetPath + '**/*'],
        // extensions are optional
        extensions: [
          '.js', '.scss', '.css', '.sass', '.tsc', 'jsx', '.mjs', '.md'
        ],
        // these are optional too
        termOpen: '%',
        termClose: '%',
        terms: replacements
      });

      console.log(status?.toString() || 'Done :)');
    });
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });

function camelize (str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');
}

function removeDiacritics (word, wordSeparator = '_') {
  return word
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ /g, wordSeparator);
}

function slugfy (val) {
  return removeDiacritics(val, '-')
    .replace(/[^a-z0-9-]/ig, '')
    .replace(/-$/, '')
    .replace(/--/g, '-')
    .toLowerCase();
}