interface Project {
  name: string;
  year: number;
  images: string[];
  description: JSX.Element;
  credits: JSX.Element | null;
}

export const digitalfashionprojects: Project[] = [
  {
    name: "House of Error",
    year: 2018,
    images: [],
    description: (
      <span>
        <h3>House of Error</h3>
      </span>
    ),
    credits: null,
  },
];
