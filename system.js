import { axesAll } from "./axes.js";
import { IKL_VEC } from "./ikl.js";

export function systemVector(Phi, phi, phi2){
    return {
        axes: axesAll(Phi, phi, phi2),
        ikl: IKL_VEC,
        status: "vec-ready"
    };
}

