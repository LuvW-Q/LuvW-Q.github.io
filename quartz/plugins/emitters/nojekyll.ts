import { QuartzEmitterPlugin } from "../types"
import { joinSegments } from "../../util/path"
import fs from "fs"

export const NoJekyll: QuartzEmitterPlugin = () => ({
  name: "NoJekyll",
  async *emit({ argv }) {
    const noJekyllPath = joinSegments(argv.output, ".nojekyll")
    await fs.promises.writeFile(noJekyllPath, "")
    yield noJekyllPath
  },
  async *partialEmit() {},
})
