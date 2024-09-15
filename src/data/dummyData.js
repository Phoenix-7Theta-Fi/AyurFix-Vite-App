
// ------------------- Prakriti Data -------------------
export const prakritiData = {
  doshas: [
    { name: 'Vata', value: 40 },
    { name: 'Pitta', value: 35 },
    { name: 'Kapha', value: 25 },
  ],
  gunas: [
    { name: 'Sattva', value: 50 },
    { name: 'Rajas', value: 30 },
    { name: 'Tamas', value: 20 },
  ],
};

// ------------------- Vital Metrics Data -------------------
export const vitalMetricsData = {
  heartRate: [72, 75, 70, 68, 73, 71, 69],
  steps: [5000, 6000, 5500, 7000, 6500, 7200, 6800],
  caloriesBurned: [2000, 2100, 1950, 2200, 2050, 2150, 2000],
  // Additional metrics can be added here
};

// ------------------- Insights Data -------------------
export const insightsData = {
  latestInsight:
    "Your mental health and energy levels improved as your Pitta remained balanced. Continue your current yoga routine to maintain this progress.",
};

// ------------------- Physical Activity Data -------------------
export const physicalActivityData = {
  yoga: [
    { month: 'Jan', Hatha: 30, Vinyasa: 20, Ashtanga: 10 },
    { month: 'Feb', Hatha: 25, Vinyasa: 25, Ashtanga: 15 },
    { month: 'Mar', Hatha: 35, Vinyasa: 30, Ashtanga: 20 },
    { month: 'Apr', Hatha: 40, Vinyasa: 35, Ashtanga: 25 },
  ],
  workout: [
    { month: 'Jan', Calories: 2000, Strength: 80, Distance: 50 },
    { month: 'Feb', Calories: 2100, Strength: 85, Distance: 55 },
    { month: 'Mar', Calories: 1950, Strength: 90, Distance: 60 },
    { month: 'Apr', Calories: 2200, Strength: 95, Distance: 65 },
  ],
  meditation: [
    { month: 'Jan', Meditation: 10 },
    { month: 'Feb', Meditation: 15 },
    { month: 'Mar', Meditation: 20 },
    { month: 'Apr', Meditation: 25 },
  ],
};

// ------------------- Lifestyle Data -------------------
export const lifestyleData = {
  diet: [
    { day: 'Day 1', Vata: 10, Pitta: 20, Kapha: 15, Calories: 2000, Protein: 100, Carbs: 250, Fats: 70 },
    { day: 'Day 2', Vata: 12, Pitta: 18, Kapha: 17, Calories: 2100, Protein: 110, Carbs: 240, Fats: 80 },
    { day: 'Day 3', Vata: 8, Pitta: 22, Kapha: 14, Calories: 1950, Protein: 105, Carbs: 230, Fats: 75 },
    { day: 'Day 4', Vata: 15, Pitta: 15, Kapha: 20, Calories: 2200, Protein: 120, Carbs: 260, Fats: 85 },
    { day: 'Day 5', Vata: 10, Pitta: 20, Kapha: 18, Calories: 2050, Protein: 115, Carbs: 245, Fats: 78 },
    { day: 'Day 6', Vata: 9, Pitta: 19, Kapha: 16, Calories: 2150, Protein: 118, Carbs: 255, Fats: 80 },
    { day: 'Day 7', Vata: 11, Pitta: 21, Kapha: 19, Calories: 2000, Protein: 112, Carbs: 250, Fats: 82 },
  ],
  medications: [
    { id: 1, name: 'Ashwagandha', type: 'Herbal', dosage: '500mg', adherence: 'Yes', effects: 'Reduced anxiety, improved sleep' },
    { id: 2, name: 'Vitamin D', type: 'Supplement', dosage: '2000 IU', adherence: 'No', effects: 'N/A' },
    { id: 3, name: 'Turmeric', type: 'Herbal', dosage: '1000mg', adherence: 'Yes', effects: 'Reduced inflammation' },
    { id: 4, name: 'Omega-3', type: 'Supplement', dosage: '1000mg', adherence: 'Yes', effects: 'Improved heart health' },
  ],
  rituals: [
    {
      day: 'Day 1',
      morning: 'Oil Massage',
      evening: 'Meditation',
      biohacking: 'Intermittent Fasting',
      skincare: 'Facial Cleanse',
    },
    {
      day: 'Day 2',
      morning: 'Yoga',
      evening: 'Pranayama',
      biohacking: 'Light Therapy',
      skincare: 'Moisturizing',
    },
    {
      day: 'Day 3',
      morning: 'Oil Massage',
      evening: 'Meditation',
      biohacking: 'Cold Shower',
      skincare: 'Exfoliation',
    },
    {
      day: 'Day 4',
      morning: 'Yoga',
      evening: 'Pranayama',
      biohacking: 'Intermittent Fasting',
      skincare: 'Facial Cleanse',
    },
    {
      day: 'Day 5',
      morning: 'Oil Massage',
      evening: 'Meditation',
      biohacking: 'Light Therapy',
      skincare: 'Moisturizing',
    },
    {
      day: 'Day 6',
      morning: 'Yoga',
      evening: 'Pranayama',
      biohacking: 'Cold Shower',
      skincare: 'Exfoliation',
    },
    {
      day: 'Day 7',
      morning: 'Oil Massage',
      evening: 'Meditation',
      biohacking: 'Intermittent Fasting',
      skincare: 'Facial Cleanse',
    },
  ],
};

// ------------------- Calendar Data -------------------
export const calendarData = [
  {
    id: 1,
    date: '2024-09-20',
    title: 'Yoga Session with Mr. Rohan Verma',
    type: 'Video',
  },
  {
    id: 2,
    date: '2024-09-22',
    title: 'Meditation Consultation with Ms. Priya Kaur',
    type: 'In-Person',
  },
  {
    id: 3,
    date: '2024-09-25',
    title: 'Lab Test: Complete Blood Count',
    type: 'Clinic',
  },
  // Add more events as needed
];

// ------------------- Practitioner Data -------------------
export const practitionerData = [
  {
    id: 1,
    name: 'Dr. Anjali Sharma',
    photo: 'https://via.placeholder.com/150',
    specialty: 'Ayurvedic Doctor',
    yearsOfExperience: 10,
    location: 'New Delhi',
    rating: 4.8,
    consultationType: ['Video', 'In-Person'],
    fee: 50,
  },
  {
    id: 2,
    name: 'Mr. Ravi Gupta',
    photo: 'https://via.placeholder.com/150',
    specialty: 'Yoga Coach',
    yearsOfExperience: 8,
    location: 'Mumbai',
    rating: 4.5,
    consultationType: ['Video'],
    fee: 30,
  },
  {
    id: 3,
    name: 'Ms. Priya Singh',
    photo: 'https://via.placeholder.com/150',
    specialty: 'Meditation Guide',
    yearsOfExperience: 5,
    location: 'Bangalore',
    rating: 4.7,
    consultationType: ['Video', 'In-Person'],
    fee: 40,
  },
  // Add more practitioners as needed
];

// ------------------- Lab Test Data -------------------
export const labTestData = [
  {
    id: 1,
    name: 'Dosha Imbalance Test',
    description: 'Assess your current Dosha balance to tailor personalized Ayurvedic treatments.',
    cost: 100,
  },
  {
    id: 2,
    name: 'Complete Blood Count',
    description: 'Evaluate your overall health and detect a wide range of disorders.',
    cost: 150,
  },
  {
    id: 3,
    name: 'Thyroid Panel',
    description: 'Check thyroid function to ensure metabolic health.',
    cost: 200,
  },
  {
    id: 4,
    name: 'Hormone Panel',
    description: 'Assess hormone levels to identify imbalances affecting various body functions.',
    cost: 250,
  },
  // Add more lab tests as needed
];

// ------------------- Notifications and Reminders -------------------
export const notificationsData = [
  {
    title: 'Upcoming Consultation',
    description: 'Your consultation with Dr. Anjali Sharma is scheduled for Sep 20, 2024 at 10:00 AM.',
  },
  {
    title: 'Daily Log Reminder',
    description: 'Don’t forget to log your daily activities and diet.',
  },
  {
    title: 'Lab Test Due',
    description: 'Complete your Dosha Imbalance Test by Sep 25, 2024.',
  },
  // Add more notifications as needed
];
