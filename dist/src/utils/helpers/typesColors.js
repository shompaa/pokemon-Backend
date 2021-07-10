"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeColorSwitch = void 0;
const typeColorSwitch = (value) => ({
    normal: { color: 'crema', es: 'Normal' },
    fighting: { color: 'rojo', es: 'Luchador' },
    flying: { color: 'celeste', es: 'Volador' },
    poison: { color: 'purpura', es: 'Veneno' },
    ground: { color: 'cafe', es: 'Tierra' },
    rock: { color: 'plomo', es: 'Roca' },
    bug: { color: 'verde', es: 'Bicho' },
    ghost: { color: 'morado', es: 'Fantasma' },
    steel: { color: 'zinc', es: 'Acero' },
    fire: { color: 'naranjo', es: 'Fuego' },
    water: { color: 'azul', es: 'Agua' },
    grass: { color: 'oliva', es: 'Planta' },
    electric: { color: 'amarillo', es: 'Electrico' },
    psychic: { color: 'rosa', es: 'Psiquico' },
    ice: { color: 'acero', es: 'Hielo' },
    dragon: { color: 'indigo', es: 'Dragon' },
    dark: { color: 'negro', es: 'Siniestro' },
    fairy: { color: 'malva', es: 'Hada' },
    unknown: { color: 'blanco', es: 'Desconocido' },
    shadow: { color: 'negro', es: 'Siniestro' },
}[value]);
exports.typeColorSwitch = typeColorSwitch;
//# sourceMappingURL=typesColors.js.map