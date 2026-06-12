CREATE TABLE contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text NOT NULL,
  sms_consent boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public contact form)
CREATE POLICY "allow_public_insert" ON contact_submissions FOR INSERT
  TO anon WITH CHECK (true);

-- Only authenticated users (admins) can read
CREATE POLICY "select_authenticated" ON contact_submissions FOR SELECT
  TO authenticated USING (true);

-- Only authenticated users can update
CREATE POLICY "update_authenticated" ON contact_submissions FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

-- Only authenticated users can delete
CREATE POLICY "delete_authenticated" ON contact_submissions FOR DELETE
  TO authenticated USING (true);