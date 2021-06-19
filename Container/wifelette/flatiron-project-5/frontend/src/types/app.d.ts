interface FilterDetails {
  isFiltered: boolean;
  buttonTextOnShow: string;
  buttonTextOnHide: string;
  onFilter: () => void;
}

interface Material {
  id: string;
  name: string;
  source: string | null;
  activities: Activity[];
}

interface Activity {
  id: string;
  name: string;
  category: string | null;
  materials: Material[];
  days: Day[];
}

interface Day {
  id: string;
  date: string;
  activities: Activity[];
}
