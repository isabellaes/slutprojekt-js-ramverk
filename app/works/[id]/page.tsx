import Container from "@/app/components/container/Container";
import { fetchWorkById } from "@/app/lib/functions";

export default async function Page({ params }: { params: { id: string } }) {
  const data = await fetchWorkById(params.id);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Container size="20vw">
        <img
          src={`https://covers.openlibrary.org/b/id/${data.covers[0]}-M.jpg`}
          alt="cover"
          style={{ maxHeight: "200px", maxWidth: "100px" }}
        />
        <p>{data.title}</p>

        <button>Add to favourite</button>
        <button>Mark as finished</button>
      </Container>
      <Container size="80vw">
        <h1>{data.title}</h1>
        <p>
          {typeof data.description === "string" ? (
            <>{data.description}</>
          ) : (
            <>{data.description.value}</>
          )}
        </p>
      </Container>
    </div>
  );
}
