// צרו מחלקה של רכב עם שדות של מס גלגלים נפח מנוע וצבע, בנוסף בנו פונקציה שמחזירה את הפרטים בטקסט אחד.
//  לאחר מכן צרו 3 מחלקות של סוגי רכבים לפי בחירתכן/ם, המחלקות יורשות מהמחלקה רכב.
//  caps lock  הוסיפו לכל מחלקה פונקציה שקוראת לפונקציה ממחלקת ההורה ומחזירה את הטקסט עם שם . 
// צרו פונקציית get  באחת ממחלקות הילד שמחזירה תוצאה של פונקציה אחרת שמחזירה את השם ב
// צרו פונקציה סטטית במחלקה רכב שמקבלת מספר אובייקטים ומחזירה את האובייקט עם נפח המנוע הגדול ביותר.
// צרו טופס שמקבל נתונים מהמשתמש ועל פי הטופס יוצרת את האובייקט המתאים ומוסיפה אותו לטבלה מתחת לטופס.


class Car {
    constructor(wheelAmount, engineCC, color) {
        this.wheelAmount = wheelAmount;
        this.engineCC = engineCC;
        this.color = color;
    }

    toString() {
        return `
        wheel amount:${wheelAmount}
        engine:${engineCC}
        color:${color}
        `;
    }

    static getBiggestEngine(car1, car2, car3) {
        if (car1.engineCC > car2.engineCC) {
            return car1
        }
        else if (car2.engineCC > car3.engineCC) {
            return car2
        }
        else {
            return car3
        }
    }
}

class Mazda extends Car {
    _name;

    constructor(wheelAmount, engineCC, color, _name) {
        super(wheelAmount, engineCC, color);
        this._name = _name;
    }

    toString() {
        return `
        ${super.toString()}
        name:${this._name}
        `;
    }
}

class Toyota extends Car {
    _name;

    constructor(wheelAmount, engineCC, color, _name) {
        super(wheelAmount, engineCC, color);
        this._name = _name;
    }

    toString() {
        return `
        ${super.toString()}
        name:${this._name}
        `;
    }
}

class BMW extends Car {
    _name;

    constructor(wheelAmount, engineCC, color, _name) {
        super(wheelAmount, engineCC, color);
        this._name = _name;
    }

    get name() {
        return this._name.toUpperCase();
    }

    toString() {
        return `
        ${super.toString()}
        ${this._name}
        `;
    }
}
function createCarTable() {

    myList.innerHTML +=
              `
               <tr>
               <th> wheel amount </th>
               <th> engine </th>
               <th> color </th>
               <th> name </th>
               </tr>
               <tr>
               <td> ${wheelAmount.value} </td>
               <td> ${engineCC.value} </td>
               <td> ${Color.value} </td>
               <td> ${Name.value} </td>
               </tr>
               

               `
}

