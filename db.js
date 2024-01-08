import 'dotenv/config'
import postgres from "postgres"

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;
const URL = `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?optiions=project%3D${ENDPOINT_ID}`;

export const sql = postgres(URL, { ssl: 'required' });