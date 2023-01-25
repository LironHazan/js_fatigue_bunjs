import { expect, test } from "bun:test";
import {MyFooQueryLang} from './dummy.parser';


test("test my dummy query", () => {
    const result = MyFooQueryLang.query.tryParse(`foo == "hey there" && foo == "eatPizza"`);
    expect(JSON.stringify(result)).toEqual('[["foo","==","hey there 🍕"],["&&",["foo","==","eatPizza 🍕"]]]')
})
