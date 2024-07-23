import consola from "consola";
import {defineCommand} from "citty";
import {useContainer} from '../../services/container';


export default defineCommand({
  meta: {
    name: "run",
    description: "Run your tasks"
  },
  args: {
    task: {
      description: "Name of the task",
      type: "positional",
      required: true,
    },
  },
  run({ args }) {
    const {runContainer} = useContainer();
    consola.log("Running task");
    runContainer({containerName: 'test', image: 'node:22-alpine', script: 'node -v'});
  },
});
