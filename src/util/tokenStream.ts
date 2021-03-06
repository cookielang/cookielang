import { Token } from "../lexing/lexer";
import TokenType from "../lexing/tokenType";

export default class TokenStream {
    data: Token[];
    i: number = 0;
    constructor(data: Token[]) {
        this.data = data;
    }
    next() {
        this.i++;
        return this.data[this.i];
    }
    peek(l = 1) {
        return this.data[this.i + l];
    }
    skip(l = 1) {
        this.i += l;
    }
    skipOver(type: TokenType) {
        this.get().expectType(type);
        this.skip();
    }
    get() {
        return this.data[this.i];
    }
    hasNext() {
        return this.data[this.i + 1] !== undefined;
    }
}
