import { State, hookstate } from "@hookstate/core";
import {Todo} from "../../types"

const globalTodos: State<Todo[]> = hookstate([{title: "titulo", completed: false}, {title: "titulo 2", completed: true}] as Todo[]);

export {
  globalTodos
}