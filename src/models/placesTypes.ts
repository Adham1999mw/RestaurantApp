export interface Place {
  place_id: string;
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
  };
  name: string;
  vicinity: string;
  types: string[];
}

export interface PlacesApiResponse {
  results: Place[];
  status: string;
}
