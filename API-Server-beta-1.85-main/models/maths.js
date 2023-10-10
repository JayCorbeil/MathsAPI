import Model from './model.js';

export default class Maths extends Model {
    constructor() {
        super();

        if(this.valueValid(value,'integer')){
            parseInt(value) != Nan;
        }
        else if(this.valueValid(value,'float')){
            parseFloat(value) != Nan;
        }
        
        // this.addField('Op', 'string');
        // this.addField('x', 'float');
        // this.addField('y', 'float');
              
        // this.setKey("Code");
    }
}