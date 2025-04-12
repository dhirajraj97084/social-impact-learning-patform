import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { StarIcon, ClockIcon, UserIcon, AcademicCapIcon } from '@heroicons/react/24/solid';

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated API call to fetch course details
    const fetchCourseDetails = async () => {
      try {
        // In a real application, this would be an API call
        const mockCourse = {
          id: parseInt(id),
          title: 'Introduction to Social Impact',
          description: 'Learn the fundamentals of creating positive social change through innovative approaches and sustainable practices.',
          // price: 0.0,
          rating: 4.8,
          reviews: 128,
          students: 1234,
          duration: '8 weeks',
          level: 'Beginner',
          instructor: 'Dr. Sarah Johnson',
          image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
          curriculum: [
            {
              week: 1,
              title: 'Understanding Social Impact',
              topics: ['What is Social Impact?', 'Key Concepts and Frameworks', 'Case Studies']
            },
            {
              week: 2,
              title: 'Sustainable Development Goals',
              topics: ['UN SDGs Overview', 'Local Implementation', 'Measuring Progress']
            },
            {
              week: 3,
              title: 'Social Entrepreneurship',
              topics: ['Business Models for Social Impact', 'Funding Strategies', 'Scaling Impact']
            }
          ]
        };
        setCourse(mockCourse);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching course details:', error);
        setLoading(false);
      }
    };

    fetchCourseDetails();
  }, [id]);

  const handleAddToCart = () => {
    // In a real application, this would add the course to the cart
    navigate('/cart');
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-red-600">Course not found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <h1 className="text-3xl font-bold mt-6 mb-4">{course.title}</h1>
            <p className="text-gray-600 mb-6">{course.description}</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center">
                  <StarIcon className="h-5 w-5 text-yellow-400 mr-2" />
                  <span className="font-semibold">{course.rating}</span>
                </div>
                <p className="text-sm text-gray-600">{course.reviews} reviews</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center">
                  <UserIcon className="h-5 w-5 text-blue-500 mr-2" />
                  <span className="font-semibold">{course.students}</span>
                </div>
                <p className="text-sm text-gray-600">students</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center">
                  <ClockIcon className="h-5 w-5 text-green-500 mr-2" />
                  <span className="font-semibold">{course.duration}</span>
                </div>
                <p className="text-sm text-gray-600">duration</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center">
                  <AcademicCapIcon className="h-5 w-5 text-purple-500 mr-2" />
                  <span className="font-semibold">{course.level}</span>
                </div>
                <p className="text-sm text-gray-600">level</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">Curriculum</h2>
              <div className="space-y-4">
                {course.curriculum.map((week) => (
                  <div key={week.week} className="border-b pb-4">
                    <h3 className="font-semibold text-lg mb-2">
                      Week {week.week}: {week.title}
                    </h3>
                    <ul className="list-disc list-inside text-gray-600">
                      {week.topics.map((topic, index) => (
                        <li key={index}>{topic}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
              <div className="mb-6">
                <p className="text-3xl font-bold text-blue-600">{course.price}</p>
              </div>
              <div className="space-y-4 mb-6">
                <p className="flex items-center text-gray-600">
                  <UserIcon className="h-5 w-5 mr-2" />
                  Instructor: {course.instructor}
                </p>
                <p className="flex items-center text-gray-600">
                  <ClockIcon className="h-5 w-5 mr-2" />
                  Duration: {course.duration}
                </p>
                <p className="flex items-center text-gray-600">
                  <AcademicCapIcon className="h-5 w-5 mr-2" />
                  Level: {course.level}
                </p>
              </div>
              <button
                onClick={handleAddToCart}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CourseDetails; 