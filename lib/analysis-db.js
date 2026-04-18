import { getDatabase } from "./mongodb";

function normalizeAnalysis(document) {
  if (!document) {
    return null;
  }

  const { _id, createdAt, updatedAt, ...rest } = document;

  return {
    ...rest,
    _id: _id ? _id.toString() : undefined,
    createdAt: createdAt ? new Date(createdAt).toISOString() : null,
    updatedAt: updatedAt ? new Date(updatedAt).toISOString() : null,
  };
}

export async function storeAnalysisRecord(record) {
  const db = await getDatabase();
  if (!db) {
    return null;
  }

  const collection = db.collection("analyses");
  const now = new Date();
  const document = {
    ...record,
    createdAt: now,
    updatedAt: now,
  };

  const result = await collection.insertOne(document);
  return normalizeAnalysis({ ...document, _id: result.insertedId });
}

export async function getLatestAnalysisRecord() {
  const db = await getDatabase();
  if (!db) {
    return null;
  }

  const collection = db.collection("analyses");
  const document = await collection.findOne({}, { sort: { createdAt: -1, _id: -1 } });
  return normalizeAnalysis(document);
}
