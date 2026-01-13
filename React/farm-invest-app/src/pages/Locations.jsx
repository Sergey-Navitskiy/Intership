import React, { useState } from "react";
import { useGetFieldsQuery } from "../features/api/apiSlice";
import { Link } from "react-router-dom";
import "../styles/Locations.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});
L.Marker.prototype.options.icon = DefaultIcon;

const Locations = () => {
  const { data, isLoading } = useGetFieldsQuery();

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("default");
  const [onlyCheap, setOnlyCheap] = useState(false);

  if (isLoading) return <div className="loading">Loading...</div>;

  let processedData = data?.products ? [...data.products] : []; // ?- проверка на наличие данных

  if (searchTerm) {
    processedData = processedData.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  if (onlyCheap) {
    processedData = processedData.filter((item) => item.price < 5); // Показываем только дешевле 5
  }

  if (sortOrder === "asc") {
    processedData.sort((a, b) => a.price - b.price); // От меньшего к большему
  } else if (sortOrder === "desc") {
    processedData.sort((a, b) => b.price - a.price); // От большего к меньшему
  }

  const getCoordinates = (id) => {
    const baseLat = 51.1657;
    const baseLng = 10.4515;
    const lat = baseLat + Math.sin(id) * 2.5;
    const lng = baseLng + Math.cos(id) * 3.5;
    return [lat, lng];
  };

  return (
    <div className="locations-page">
      <div className="top-section">
        <h1 className="page-title">Locations</h1>

        <div className="search-bar">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search by city, country, village places"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {searchTerm && (
            <button className="clear-btn" onClick={() => setSearchTerm("")}>
              ✕
            </button>
          )}
          <button className="search-btn">Search</button>
        </div>
      </div>

      <div className="split-layout">
        <div className="list-section">
          <div className="list-controls">
            <div className="sort-wrapper">
              <span>Sort by: </span>
              <select
                className="sort-select"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="default">All</option>
                <option value="asc">Price: Low to High</option>
                <option value="desc">Price: High to Low</option>
              </select>
            </div>

            <button
              className={`filter-btn ${onlyCheap ? "active" : ""}`}
              onClick={() => setOnlyCheap(!onlyCheap)}
            >
              Filter {onlyCheap ? "(Active)" : ""}
            </button>
          </div>

          <div className="cards-list">
            {processedData.length > 0 ? (
              processedData.map((field) => (
                <div key={field.id} className="card-item">
                  <div className="card-img-wrapper">
                    <img src={field.thumbnail} alt={field.title} />
                  </div>

                  <div className="card-info">
                    <div className="card-text">
                      <h3>{field.title}</h3>
                      <p className="card-brand">
                        Guide Price: <b>€{field.price}</b>
                      </p>
                    </div>

                    <Link to={`/locations/${field.id}`} className="shop-btn">
                      Shop
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-results">
                <h3>No fields found</h3>
                <p>Try changing your search criteria</p>
              </div>
            )}
          </div>
        </div>

        <div className="map-section">
          <MapContainer
            center={[51.1657, 10.4515]} // Центр Германии
            zoom={6}
            scrollWheelZoom={true}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {processedData.map((field) => {
              const position = getCoordinates(field.id);
              return (
                <Marker key={field.id} position={position}>
                  <Popup>
                    <div className="map-popup-content">
                      <img
                        src={field.thumbnail}
                        alt={field.title}
                        style={{ width: "100%", borderRadius: 4 }}
                      />
                      <b>{field.title}</b>
                      <br />
                      Price: €{field.price} <br />
                      <Link to={`/locations/${field.id}`}>Invest here</Link>
                    </div>
                  </Popup>
                </Marker>
              );
            })}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Locations;
