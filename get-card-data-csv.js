// Pull card data in CSV format from pkmncards.com
let csv = 'Set, Number, Name, Type, Power, Rarity, Price, Owned?';
let setName = '';
for(const child of document.getElementById("genesis-content").children) {
	const content = child.firstChild.firstChild.children;
  let index = 0;
  let info = '';
  for(const c of content) { 
    switch(index) { 
      case 0:
        const setEl = c.firstChild;
        let set = '';
        if(!c.firstChild.firstChild.innerHTML) {
            set = c.firstChild.innerHTML;
        } else {
            set = c.firstChild.firstChild.innerHTML;
        }
        if(!setName) {
        	setName = set;
        }
        info += set + ", ";
        break;
      case 1:
        const number = c.firstChild.innerHTML;
        info += number + ", ";
        break;
      case 2:
        const name = c.firstChild.innerHTML;
        info += name + ", ";
        break;
      case 3:
        const typeEl = c?.firstChild;
        let type= '';
        if( typeEl?.firstChild?.innerHTML) { 
        	type = typeEl?.firstChild?.innerHTML;
        } else { 
        	type = typeEl.innerHTML;
        }
        info += type + ", ";
        break;
      case 4:
        let power= c?.firstChild?.firstChild?.title;
        if(!power) {
        	power = '-';
        }
        info += power + ", ";
        break;
      case 5:
        const rarity = c.firstChild.innerHTML;
        info += rarity + ", ";
        break;
      case 6:
        const price = c.firstChild.innerHTML;
        info += price;
        break;
    }
    index+=1;
	}
  if(!!info) { 
	  csv += '\n' + info;
	}
};

const filename = setName + ' Set Data.csv' 
console.log(csv);

var element = document.createElement('a');
element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(csv));
element.setAttribute('download', filename);
element.style.display = 'none';
document.body.appendChild(element);
element.click();
document.body.removeChild(element);

