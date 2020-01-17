const cardCreator = (arr) => arr.map((item) => {
  const card = document.createElement('div');
  card.classList.add('cards-card');

  Object.keys(item).forEach((value) => {
    // console.log(value, item[value])
    if (value === 'contributed_by') {
      return;
    }
    let el;
    if (value === 'image_url') {
      el = document.createElement('img');
      el.src = item[value];
    } else {
      el = document.createElement('div');

      if (value === 'volume') {
        el.textContent = `Обьем: ${item[value].value} ${item[value].unit}`;
      } else if (value === 'ingredients') {
        let malt = '(MALT): ';
        let hops = '(HOPS): ';
        const yeast = `(YEAST): ${item[value].yeast}`;
        item[value].malt.forEach((item) => {
          malt += `${item.name} ${item.amount.value} ${item.amount.unit}; `;
        });
        item[value].hops.forEach((item) => {
          hops += `${item.name} ${item.amount.value} ${item.amount.unit}; `;
        });

        el.textContent = `Состав: ${malt} ${hops} ${yeast}`;

      } else if (value === 'brewers_tips') {
        el.textContent = `Описание: ${item[value]}`;
      } else {
        el.textContent = `${value}: ${item[value]}`;
      }
    }
    card.appendChild(el);
  });

  return card;
});


export default cardCreator;