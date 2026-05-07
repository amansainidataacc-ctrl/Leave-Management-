const { Pool } = require('pg');

const pool = new Pool({
    connectionString: 'postgresql://postgres.yuoqzdrpxgtotxmdeddx:Himanshu8588050920@aws-0-ap-south-1.pooler.supabase.com:6543/postgres',
    ssl: { rejectUnauthorized: false }
});

console.log("Testing database connection...");

pool.query('SELECT current_database(), version()')
    .then(res => {
        console.log('✅ DATABASE IS WORKING!');
        console.log('✅ Connected to:', res.rows[0].current_database);
        console.log('✅ PostgreSQL Version:', res.rows[0].version.split(' ').slice(0, 2).join(' '));
        process.exit(0);
    })
    .catch(err => {
        console.log('❌ DATABASE CONNECTION FAILED!');
        console.log('❌ Error:', err.message);
        process.exit(1);
    });
