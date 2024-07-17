async function getPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "GET"
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const posts = await response.json();
        // Supongamos que cada post tiene un campo `program` que necesitamos filtrar
        return posts.filter((post: any) => post.body === "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla");
    } catch (error) {
        console.error('Fetch error:', error);
        return [];
    }
}
interface PostProps {
    body: string;
}


export default async function Posts({ body }: PostProps) {
    const posts = await getPosts();
    return (
        <div className="relative w-full py-20">
            <h1>Posts for Program: {body}</h1>
            {posts.length > 0 ? (
                posts.map((post: any) => (
                    <div key={post.id} className="mb-4">
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))
            ) : (
                <p>No posts available for program: {body}</p>
            )}
        </div>
    );
}
