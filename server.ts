//ported from https://github.com/LironHazan/azure_fn/tree/master

import {MyFooQueryLang} from './dummy.parser';

Bun.serve({
    fetch(req: Request) {
        const result = MyFooQueryLang.query.tryParse(`foo == "hey there" && foo == "eatPizza"`);
        console.log(result);
        return new Response(JSON.stringify(result));
    },
    error(error: Error) {
      return new Response("Uh oh!!\n" + error.toString(), { status: 500 });
    },
  });
