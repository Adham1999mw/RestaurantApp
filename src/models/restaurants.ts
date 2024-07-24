export interface Position {
  coords?: {
    latitude: number;
    longitude: number;
  };
}

export interface Photo {
  photo_reference: string;
  height: number;
  width: number;
  html_attributions: string[];
}

export interface Restaurant {
  distance: any;
  rating: number;
  photos?: Photo[];
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

export interface Location {
  latitude: number;
  longitude: number;
}
