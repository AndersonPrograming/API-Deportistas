import zod from "zod";

const club = zod.object({
     nombre_club: zod.string(),
     tecnico_club:zod.string(),
     ciudad:zod.number()
});

const validarClub = (data) => {
     const result = club.safeParse(data);
     return result;
};

const clubUpdated = zod.object({
     nombre_club: zod.string().optional(),
     nombre_tecnico:zod.number().optional(),
     ciudad:zod.number().optional()
});

const validarClubUpdated = (data) => {
     const result = clubUpdated.safeParse(data);
     return result;
};



export {
     validarClub, 
     validarClubUpdated
};
