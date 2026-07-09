import { Vec9 } from "./vec9.js";

export function axisPhi(v){ return new Vec9(v, 0, 0); }
export function axisphi(v){ return new Vec9(0, v, 0); }
export function axisphi2(v){ return new Vec9(0, 0, v); }

export function axesAll(Phi, phi, phi2){
    return {
        Phi: axisPhi(Phi),
        phi: axisphi(phi),
        phi2: axisphi2(phi2)
    };
}

