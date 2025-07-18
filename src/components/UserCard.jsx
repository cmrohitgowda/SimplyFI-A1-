export default function UserCard({ user }) {
  const { username, name, email, phone, website, address, company } = user;

  const avatarUrl = `https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`;

  return (
    <div
      className="card bg-white"
      style={{
        maxWidth: "1100px",
        margin: "20px auto",
        borderRadius: "0px",
        boxShadow: "0 3px 6px rgba(0, 0, 0, 0.2)",
      }}
    >
      <div className="row g-0 ">
        <div className="col-md-2  ">
          <div className="w-100% d-flex">
            <img
              src={avatarUrl}
              alt={username}
              className="img-fluid"
              style={{
                objectFit: "cover",
                padding: "10px",
              }}
            />
          </div>
        </div>

        <div className="col-md-9 lh-sm">
          <div className="card-body p-2">
            <h2 className="card-title fs-4 mb-3">{name}</h2>
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
