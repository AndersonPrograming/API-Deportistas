import zod from "zod";

const universal = zod.object({
    tipo_catalogo: zod.number(),
    denominacion:zod.string()
});

const validarUniversal = (data) => {
     const result = universal.safeParse(data);
     return result;
};



export {
     validarUniversal
};
