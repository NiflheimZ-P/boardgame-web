import database from "../../../../../../utils/Database/database";
import select from "../../../../../../utils/Database/state/select";

export async function GET() {
    try {
        const result = await new database(new select('*').table('food_order')).query();
        return Response.json(result, {status: 200});
    } catch (error) {
        return Response.json({message: "Can't get data"}, { status: 401})
    }
}