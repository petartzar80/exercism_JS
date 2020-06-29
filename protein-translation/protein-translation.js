export const translate = rna => {
  if (!rna) return [];
  const proteins = rna.match(/.{1,3}/g);

  const info = [
    { name: 'Methionine', proteins: ['AUG'] },
    { name: 'Phenylalanine', proteins: ['UUU', 'UUC'] },
    { name: 'Leucine', proteins: ['UUA', 'UUG'] },
    { name: 'Serine', proteins: ['UCU', 'UCC', 'UCA', 'UCG'] },
    { name: 'Tyrosine', proteins: ['UAU', 'UAC'] },
    { name: 'Cysteine', proteins: ['UGU', 'UGC'] },
    { name: 'Tryptophan', proteins: ['UGG'] },
    { name: 'STOP', proteins: ['UAA', 'UAG', 'UGA'] },
  ];

  let translated = proteins.map(protein => {
    let name = [];
    info.forEach(element => {
      if (element.proteins.includes(protein)) {
        name.push(element.name);
      }
    });
    if (!name.length) {
      throw new Error('Invalid codon');
    } else return name[0];
  });

  if (translated.includes('STOP')) {
    translated = translated.slice(0, translated.indexOf('STOP'));
  }

  return translated;
};
