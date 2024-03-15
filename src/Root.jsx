import { Link, Outlet, useLoaderData } from "react-router-dom";

export default function Root() {
  const { contacts } = useLoaderData();
  console.log(contacts);
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          {contacts.length ? (
            <ul>
              {contacts?.slice(0, 4).map((user) => (
                <li key={user.id}>
                  <Link to={`/contacts/${user.id}`}>
                    {user.firstName || user.lastName ? (
                      <>
                        {user.firstName} {user.lastName}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
