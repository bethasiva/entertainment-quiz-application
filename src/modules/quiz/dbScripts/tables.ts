const quizScoresTable = `
    CREATE EXTENSION IF NOT EXISTS "pgcrypto";
    CREATE EXTENSION IF NOT EXISTS pg_trgm;
    CREATE TABLE IF NOT EXISTS quiz_scores (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    total_questions INT NOT NULL,
    correct_answers INT NOT NULL,
    message TEXT,
    grade VARCHAR(50),
    status VARCHAR(50),
    created_at TIMESTAMPTZ DEFAULT NOW()
    );
    CREATE INDEX IF NOT EXISTS idx_quiz_scores_name_trgm ON quiz_scores USING gin (name gin_trgm_ops);
    CREATE INDEX IF NOT EXISTS idx_quiz_scores_created_at ON quiz_scores (created_at DESC);
`;

export const quizTablesSchema = [quizScoresTable];