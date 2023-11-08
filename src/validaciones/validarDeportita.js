import zod from "zod";

const deportista = zod.object({
     primer_nombre: zod.string().max(25),
     segundo_nombre: zod.string().max(25).optional(),
     primer_apellido: zod.string().max(25),
     segundo_apellido: zod.string().max(25).optional(),
     fecha_nacimiento: zod.number(),
     lateralidad: zod.number(),
     altura: zod.string(),
     sexo: zod.number(),
     club: zod.number(),
     deporte: zod.number(),
     imagen: zod.string().max(250).default("no-imagen.jpg"),
     posicion: zod.number(),
     peso: zod.number()
});

const validarDeportista = (data) => {
     const result = deportista.safeParse(data);
     return result;
};


const deportistaUpdated = zod.object({
     primer_nombre: zod.string().max(25).optional(),
     segundo_nombre: zod.string().max(25).optional(),
     primer_apellido: zod.string().max(25).optional(),
     segundo_apellido: zod.string().max(25).optional(),
     segundo_apellido: zod.string().max(25).optional(),
     fecha_nacimiento: zod.number().optional(),
     lateralidad: zod.number().optional(),
     altura: zod.number().optional(),
     sexo: zod.number().optional(),
     club: zod.number().optional(),
     deporte: zod.number().optional(),
     imagen: zod.string().max(250).optional(),
     posicion: zod.number().optional(),
     peso: zod.number().optional()
})

const validarDeportistaUpdated = (data) => {
     const result = deportistaUpdated.safeParse(data);
     return result;
}



export {
     validarDeportista,
     validarDeportistaUpdated
};
