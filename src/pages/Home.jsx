import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { StarIcon, UserIcon, ClockIcon } from '@heroicons/react/24/solid';

const Home = () => {
  const [expandedCourse, setExpandedCourse] = useState(null);

  const featuredCourses = [
    {
      id: 1,
      title: 'Introduction to Social Impact',
      description: 'Learn the fundamentals of creating positive social change through innovative approaches.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
      rating: 4.8,
      students: 1234,
      duration: '8 weeks',
      // price:0.0,
      category: 'Social Impact'
    },
    {
      id: 2,
      title: 'Sustainable Development Goals',
      description: 'Master the UN SDGs and learn how to implement them in your community.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
      rating: 4.9,
      students: 856,
      duration: '10 weeks',
      // price: 0.0,
      category: 'Sustainability'
    },
    {
      id: 3,
      title: 'Social Entrepreneurship',
      description: 'Learn how to build a business that creates positive social impact.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
      rating: 4.7,
      students: 2103,
      duration: '12 weeks',
      // price: 0.0,
      category: 'Entrepreneurship'
    }
  ];

  const toggleCourseDetails = (courseId) => {
    if (expandedCourse === courseId) {
      setExpandedCourse(null);
    } else {
      setExpandedCourse(courseId);
    }
  };

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Learn to Create Positive Social Impact
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl mb-8"
            >
              Discover courses that will help you make a difference in the world
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                to="/courses"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block"
              >
                Explore Courses
              </Link>
            </motion.div>
          </div>

          {/* Featured Courses */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              >
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {course.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <StarIcon className="h-5 w-5 text-yellow-400 mr-1" />
                        <span className="text-gray-700 font-semibold">{course.rating}</span>
                      </div>
                      <div className="flex items-center">
                        <UserIcon className="h-5 w-5 text-blue-500 mr-1" />
                        <span className="text-gray-700">{course.students}</span>
                      </div>
                      <div className="flex items-center">
                        <ClockIcon className="h-5 w-5 text-green-500 mr-1" />
                        <span className="text-gray-700">{course.duration}</span>
                      </div>
                    </div>
                    <span className="text-blue-600 font-bold text-xl">{course.price}</span>
                  </div>
                  <Link
                    to={`/courses/${course.id}`}
                    className="block w-full bg-blue-600 text-white text-center py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional sections can be added here */}
    </div>
  );
};

export default Home; 