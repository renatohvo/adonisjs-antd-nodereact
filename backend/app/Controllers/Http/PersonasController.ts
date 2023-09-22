import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Persona from 'App/Models/Persona'
import axios from 'axios';

const swapi = axios.create({
    baseURL: 'https://swapi.dev/api/'
});

export default class PersonasController {

    public async seeding({ response }: HttpContextContract) {
        try {
            let swapiArray: any[] = []
            for (let i = 1; i <= 9; i++) {
                const retornoswapi = await swapi.get(`/people/?page=${i}`)
                swapiArray.push(JSON.parse(JSON.stringify(retornoswapi.data.results)))
            }
            const persona = new Persona()
            for (const newArray of swapiArray) {
                for (const objeto of newArray) {
                    persona.id = 0
                    persona.name = objeto.name
                    persona.favorite = 0
                    await Persona.create(persona)
                }
            }
            return {
                message: 'Banco de Dados baixado com sucesso!',
                results: persona,
            }
        }
        catch (error) {
            response.status(500).send("Error Populating Database SWAPI")
        }
    }

    public async findAll() {
        const personas = await Persona.query().orderBy('personas.id', 'asc')
        return {
            results: personas,
        }
    }

    public async findByName({ params }: HttpContextContract) {
        const persona = await Persona.query().where('name', 'LIKE', '%' + params.name + '%')

        return {
            results: persona,
        }
    }

    public async findByFavorite({ params }: HttpContextContract) {
        const persona = await Persona.query().where('favorite', params.favorite)

        return {
            results: persona,
        }
    }

    public async updateFavorite({ params }: HttpContextContract) {

        const persona = await Persona.findOrFail(params.id)

        const favorite = isBooleanNumber(params.favorite)

        if (!favorite) {
            persona.favorite = 0
        }
        else {
            persona.favorite = 1
        }

        await persona.save()

        return {
            message: 'Persona atualizada com sucesso!',
            results: persona,
        }
    }

}

function isBooleanNumber(param: string | number) {
    var boolValues = { "false": false, "False": false, "FALSE": false, 0: false, "true": true, "True": true, "TRUE": true, 1: true };
    return boolValues[param];
}
