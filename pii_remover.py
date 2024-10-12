import pandas as pd
import re
import spacy

# Load spaCy model
nlp = spacy.load("en_core_web_sm")

# Define a function to check if a column contains PII using regex
def contains_pii_using_regex(text):
    # Patterns for common PII 
    email_pattern = r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}'
    phone_pattern = r'\(?\b[0-9]{3}\)?[-.\s]?[0-9]{3}[-.\s]?[0-9]{4}\b'
    ssn_pattern = r'\b\d{3}-\d{2}-\d{4}\b'
    birthday_pattern = r'\b\d{4}-\d{2}-\d{2}\b'  # Updated to match YYYY-MM-DD format for birthdates

    # Check if any PII patterns match
    if re.search(email_pattern, text) or re.search(phone_pattern, text) or re.search(ssn_pattern, text) or re.search(birthday_pattern, text):
        return True
    return False

# Define a function to check if a column contains PII using Named Entity Recognition (NER)
def contains_pii_using_ner(text):
    doc = nlp(text)
    pii_entities = ['PERSON']  # Focus only on personal names as PII
    
    # Check if any of the recognized entities are sensitive
    for ent in doc.ents:
        if ent.label_ in pii_entities:
            return True
    return False

# Define a function to check if a column is non-sensitive (e.g., numerical data)
def is_non_sensitive_column(text):
    # If the column contains mostly numerical data, consider it non-PII
    if text.replace('.', '', 1).isdigit():
        return True
    return False

# Define a function to process the CSV and remove only sensitive PII columns
def remove_pii_columns_from_csv(input_csv, output_csv):
    df = pd.read_csv(input_csv)
    columns_to_drop = []

    # Check each column for PII
    for col in df.columns:
        # Convert the entire column to string to handle non-string data
        combined_text = ' '.join(df[col].astype(str))
        
        # Check if the column is numerical and non-sensitive
        if not is_non_sensitive_column(combined_text):
            # Check for PII using both regex and NER
            if contains_pii_using_regex(combined_text) or contains_pii_using_ner(combined_text):
                columns_to_drop.append(col)
                print(f"Column '{col}' contains PII and will be removed.")

    # Drop columns with PII
    df_cleaned = df.drop(columns=columns_to_drop)
    
    # Save the cleaned CSV
    df_cleaned.to_csv(output_csv, index=False)
    print(f"Columns removed. Cleaned CSV saved to {output_csv}")

# Run the script
input_csv = 'input.csv'  # Path to input CSV file
output_csv = 'output.csv'  # Path to output CSV file
remove_pii_columns_from_csv(input_csv, output_csv)

