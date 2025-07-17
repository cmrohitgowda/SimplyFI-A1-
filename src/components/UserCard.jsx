export default function UserCard({ user }) {
  const { username, name, email, phone, website, address, company } = user;

  const avatarUrl = `https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`;

  return (
    <div
      className="card shadow"
      style={{ maxWidth: "900px", margin: "20px auto", minHeight: "200px" }}
    >
      <div className="row g-0 align-items-stretch">
        <div className="col-md-3 d-flex align-items-stretch">
          <div className="w-80 d-flex">
            <img
              src={avatarUrl}
              alt={username}
              className="rounded-start"
              style={{
                height: "100%",
                width: "auto",
                maxWidth: "100%",
                objectFit: "cover",
                padding: "10px",
              }}
            />
          </div>
        </div>

        <div className="col-md-9">
          <div className="card-body h-80 p-1">
            <h2 className="card-title mb-3">{name}</h2>
            <p className="card-text mb-1">
              <strong>Email:</strong> {email}
            </p>
            <p className="card-text mb-1">
              <strong>Phone:</strong> {phone}
            </p>
            <p className="card-text mb-1">
              <strong>Company:</strong> {company.name}
            </p>
            <p className="card-text mb-1">
              <strong>Website:</strong> {website}
            </p>
            <p className="card-text mb-0">
              <strong>Address:</strong>{" "}
              {`${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
