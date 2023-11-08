import zod from "zod";

const deporte = zod.object({
     nombre_deporte: zod.string(),
     categoria_deporte:zod.number(),
     popularidad:zod.string(),
     club:zod.number()
});

const validarDeporte = (data) => {
     const result = deporte.safeParse(data);
     return result;
};

const deporteUpdated = zod.object({
     nombre_deporte: zod.string().optional(),
     categoria_deporte:zod.number().optional(),
     popularidad:zod.string().optional(),
     club:zod.number().optional()
});

const validarDeporteUpdated = (data) => {
     const result = deporteUpdated.safeParse(data);
     return result;
};



export {
     validarDeporte, 
     validarDeporteUpdated
};
