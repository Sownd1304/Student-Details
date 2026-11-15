# Student List & Favourites App

A React web application built with **React Context API** and **Tailwind CSS** that lets users view a list of students, add students to a favourites list, and remove them while keeping UI states synchronized across pages.

---

## Features

- **Student Directory (`Liststudents`)**: Displays all registered students with clean, centered card layouts.
- **Add to Favourites**: Clicking **Add to Favourites** adds the student to the shared favourites state, changes the button color to violet, updates the label to **Added**, and disables the button to prevent duplicate entries.
- **Favorite Students View (`Favstudents`)**: Displays only the students marked as favourites, or shows an empty-state message when none are added.
- **Remove & Re-enable**: Clicking **Remove** on the Favorite Students page deletes the student from the favourites list and automatically re-enables their **Add to Favourites** button on the main list.
- **Global State Management (`Listcontextprovider`)**: Uses React Context (`useContext` and `useState`) so data and button states stay synced when switching between pages.

---

## Tech Stack

- **React** (Functional Components, `useState`, `useContext`, `createContext`)
- **React Router** (Navigation between Student List and Favorite Students pages)
- **Tailwind CSS** (Responsive layout and utility styling)

---

## Project Structure

```text
src/
├── components/
│   ├── Header.jsx                # Top navigation bar
│   ├── Liststudents.jsx          # Main student list with Add to Favourites buttons
│   ├── favstudents.jsx           # Filtered list of favourite students with Remove buttons
│   └── Listcontextprovider.jsx   # Global Context managing student list and favourites state
├── App.js                        # Main app routing and context wrapper
└── index.js                      # Application entry point
```

---

## Getting Started

### Prerequisites

- **Node.js** (v16 or higher recommended)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com
   cd student-favourites-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

---

## How State Synchronization Works

1. **`Listcontextprovider.jsx`** stores `list` (all students) and `isfav` (an array of favourited student indexes).
2. **`addfav(index)`** appends the clicked student's index to `isfav` using `setfav([...isfav, index])`.
3. **`Liststudents.jsx`** checks `isfav.includes(index)` to conditionally disable the button, change its text to `"Added"`, and switch its background color.
4. **`removefav(index)`** filters out the removed index from `isfav` (`isfav.filter(item => item !== index)`), immediately updating both pages.

---

## Future Improvements

- Add a form component (`Addlist.jsx`) to dynamically add new students to the directory.
- Persist student and favourite lists using `localStorage` so data stays saved after page refreshes.
