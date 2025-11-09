export async function j<T>(input: RequestInfo | URL, init?: RequestInit): Promise<T> {
  const res = await fetch(input, { ...init, headers: { "content-type": "application/json", ...(init?.headers||{}) }});
  if (!res.ok) {
    const text = await res.text().catch(()=>"");
    throw new Error(text || `HTTP ${res.status}`);
  }
  return res.json();
}
