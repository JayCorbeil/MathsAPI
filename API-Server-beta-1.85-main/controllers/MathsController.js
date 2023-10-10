import MathsModel from '../models/maths.js';
import Repository from '../models/repository.js';
import Controller from './Controller.js';

export default class MathsController extends Controller {
    constructor(HttpContext) {
        // super(HttpContext, new Repository(new MathsModel()));
        this.context = HttpContext;
    }
    get() {
        let payload = this.context.payload;
        if (payload != null && payload.op != null) {
            let result = {};
            switch (payload.op) {
                case ' ':
                    
                    break;
                case '+':
                    if (payload.x != null && payload.y != null) {
                        if (!Number.isNaN(parseFloat(payload.x)) && !Number.isNaN(parseFloat(payload.y))) {
                            result.result = parseFloat(payload.x) + parseFloat(payload.y);
                            this.context.response.createrd(result);
                            return;
                        }
                        this.context.response.unprocessable("X et Y doit etre des nombres");
                    }
                    this.context.response.unprocessable("Parametre manquant");
                    return;
                    break;
                case '-':
                    if (payload.x != null && payload.y != null) {
                        if (!Number.isNaN(parseFloat(payload.x)) && !Number.isNaN(parseFloat(payload.y))) {
                            result.result = parseFloat(payload.x) - parseFloat(payload.y);
                            this.HttpContext.response.createrd(result);
                            return;
                        }
                        this.HttpContext.response.unprocessable("X et Y doit etre des nombres");
                    }
                    this.HttpContext.response.unprocessable("Parametre manquant");
                    return;
                    break;
                case '*':
                    if (payload.x != null && payload.y != null) {
                        if (!Number.isNaN(parseFloat(payload.x)) && !Number.isNaN(parseFloat(payload.y))) {
                            result.result = parseFloat(payload.x) * parseFloat(payload.y);
                            this.HttpContext.response.createrd(result);
                            return;
                        }
                        this.HttpContext.response.unprocessable("X et Y doit etre des nombres");
                    }
                    this.HttpContext.response.unprocessable("Parametre manquant");
                    return;
                    break;
                case '/':
                    if (payload.x != null && payload.y != null) {
                        if (!Number.isNaN(parseFloat(payload.x)) && !Number.isNaN(parseFloat(payload.y))) {
                            result.result = parseFloat(payload.x) / parseFloat(payload.y);
                            this.HttpContext.response.createrd(result);
                            return;
                        }
                        this.HttpContext.response.unprocessable("X et Y doit etre des nombres");
                    }
                    this.HttpContext.response.unprocessable("Parametre manquant");
                    return;
                    break;
                case '%':
                    if (payload.x != null && payload.y != null) {
                        if (!Number.isNaN(parseFloat(payload.x)) && !Number.isNaN(parseFloat(payload.y))) {
                            result.result = parseFloat(payload.x) % parseFloat(payload.y);
                            this.HttpContext.response.createrd(result);
                            return;
                        }
                        this.HttpContext.response.unprocessable("X et Y doit etre des nombres");
                    }
                    this.HttpContext.response.unprocessable("Parametre manquant");
                    return;
                    break;
                case '%':
                    if (payload.x != null && payload.y != null) {
                        if (!Number.isNaN(parseFloat(payload.x)) && !Number.isNaN(parseFloat(payload.y))) {
                            result.result = parseFloat(payload.x) + parseFloat(payload.y);
                            this.HttpContext.response.createrd(result);
                            return;
                        }
                        this.HttpContext.response.unprocessable("X et Y doit etre des nombres");
                    }
                    this.HttpContext.response.unprocessable("Parametre manquant");
                    return;
                    break;
                //todo
                case '!':
                    if (payload.n != null) {
                        if (!Number.isNaN(parseInt(payload.n))) {
                            let number = 1;
                            if (payload.n == 0 || payload.n == 1){
                            }
                            else if(payload.n > 1){
                              for(let i = payload.n; i >= 1; i--){
                                number = number * i;
                              }
                            }
                            result.result = number;
                            this.HttpContext.response.createrd(result);
                            return;
                        }
                        this.HttpContext.response.unprocessable("X et Y doit etre des nombres");
                    }
                    this.HttpContext.response.unprocessable("Parametre manquant");
                    return;
                    break;
                case 'p':
                    if (payload.n != null) {
                        if (!Number.isNaN(parseInt(payload.n))) {
                            result.result = true;
                            if (payload.n > 1) {
                                for (let i = 2; i < payload.n; i++) {
                                    if (payload.n % i == 0) {
                                        result.result = false;
                                        break;
                                    }
                                }
                            }
                            this.HttpContext.response.createrd(result);
                            return;
                        }
                        this.HttpContext.response.unprocessable("X et Y doit etre des nombres");
                    }
                    this.HttpContext.response.unprocessable("Parametre manquant");
                    return;
                    break;
                case 'np':
                    if (payload.n != null) {
                        if (!Number.isNaN(parseInt(payload.n))) {
                            result.result = parseFloat(payload.x) + parseFloat(payload.y);
                            this.HttpContext.response.createrd(result);
                            return;
                        }
                        this.HttpContext.response.unprocessable("X et Y doit etre des nombres");
                    }
                    this.HttpContext.response.unprocessable("Parametre manquant");
                    return;
                    break;

            }
        }
    }
}