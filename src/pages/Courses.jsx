import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Courses = () => {
  const [expandedCourse, setExpandedCourse] = useState(null);

  const courses = [
    {
      id: 1,
      title: 'Artificial Intelligence Fundamentals',
      description: 'Learn the basics of AI and machine learning',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3',
      category: 'AI & ML',
      duration: '8 weeks',
      level: 'Beginner',
      details: {
        topics: ['Introduction to AI', 'Machine Learning Basics', 'Neural Networks', 'Natural Language Processing'],
        instructor: 'Dr. Sarah Johnson',
        // price: '$299',
        rating: 4.8,
        students: 1200,
        description: 'This comprehensive course covers the fundamentals of artificial intelligence and machine learning. You will learn about the core concepts, algorithms, and applications of AI in various industries.'
      }
    },
    {
      id: 2,
      title: 'Web Development Bootcamp',
      description: 'Master modern web development technologies',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3',
      category: 'Web Dev',
      duration: '12 weeks',
      level: 'Intermediate',
      details: {
        topics: ['HTML & CSS', 'JavaScript', 'React', 'Node.js', 'Database Design'],
        instructor: 'Mike Chen',
        // price: '$399',
        rating: 4.9,
        students: 2500,
        description: 'A comprehensive bootcamp that will take you from beginner to professional web developer. Learn front-end and back-end technologies, and build real-world projects.'
      }
    },
    {
      id: 3,
      title: 'Blockchain Technology',
      description: 'Understand blockchain and cryptocurrency',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3',
      category: 'Blockchain',
      duration: '10 weeks',
      level: 'Advanced',
      details: {
        topics: ['Blockchain Fundamentals', 'Cryptocurrency', 'Smart Contracts', 'DeFi', 'NFTs'],
        instructor: 'Alex Rivera',
        // price: '$349',
        rating: 4.7,
        students: 1800,
        description: 'Explore the revolutionary world of blockchain technology. Learn about cryptocurrencies, smart contracts, and decentralized finance applications.'
      }
    },
    {
      id: 4,
      title: 'Cloud Computing',
      description: 'Master cloud platforms and services',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3',
      category: 'Cloud',
      duration: '8 weeks',
      level: 'Intermediate',
      details: {
        topics: ['AWS', 'Azure', 'Google Cloud', 'Serverless Architecture', 'Cloud Security'],
        instructor: 'Jennifer Lee',
        // price: '$329',
        rating: 4.6,
        students: 1500,
        description: 'Learn to deploy, manage, and scale applications on major cloud platforms. Understand cloud architecture, security, and cost optimization strategies.'
      }
    },
    {
      id: 5,
      title: 'Cybersecurity Essentials',
      description: 'Learn to protect digital assets and systems',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3',
      category: 'Security',
      duration: '10 weeks',
      level: 'Intermediate',
      details: {
        topics: ['Network Security', 'Cryptography', 'Ethical Hacking', 'Security Auditing', 'Incident Response'],
        instructor: 'David Wilson',
        // price: '$379',
        rating: 4.8,
        students: 2100,
        description: 'Develop the skills to protect organizations from cyber threats. Learn about security protocols, ethical hacking, and incident response strategies.'
      }
    },
    {
      id: 6,
      title: 'Data Science',
      description: 'Analyze and visualize data effectively',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3',
      category: 'Data Science',
      duration: '12 weeks',
      level: 'Advanced',
      details: {
        topics: ['Python for Data Science', 'Statistical Analysis', 'Machine Learning', 'Data Visualization', 'Big Data'],
        instructor: 'Dr. Emily Chen',
        // price: '$429',
        rating: 4.9,
        students: 2800,
        description: 'Master the tools and techniques of data science. Learn to extract insights from data and build predictive models for business intelligence.'
      }
    },
  ];

  const toggleCourseDetails = (courseId) => {
    if (expandedCourse === courseId) {
      setExpandedCourse(null);
    } else {
      setExpandedCourse(courseId);
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Courses</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our comprehensive range of technology courses designed to help you
          stay ahead in the digital world.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="card group"
          >
            <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
                {course.category}
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
            <p className="text-gray-600 mb-4">{course.description}</p>
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-gray-500">{course.duration}</span>
              <span className="text-sm text-gray-500">{course.level}</span>
            </div>
            
            <button
              onClick={() => toggleCourseDetails(course.id)}
              className="text-primary hover:text-primary/80 font-medium mb-4 w-full text-left"
            >
              {expandedCourse === course.id ? 'Show Less' : 'Learn More'} →
            </button>
            
            {expandedCourse === course.id && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="border-t pt-4 mt-4"
              >
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div>
                    <p className="text-sm text-gray-500">Instructor</p>
                    <p className="font-medium">{course.details.instructor}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Price</p>
                    <p className="font-medium">{course.details.price}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-2">Course Description:</p>
                  <p className="text-sm text-gray-600">{course.details.description}</p>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-2">Topics Covered:</p>
                  <ul className="list-disc list-inside text-sm">
                    {course.details.topics.map((topic, index) => (
                      <li key={index} className="text-gray-600">{topic}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="text-yellow-500 mr-1">★</span>
                    <span className="font-medium">{course.details.rating}</span>
                    <span className="text-gray-500 text-sm ml-1">({course.details.students} students)</span>
                  </div>
                  <Link
                    to={`/courses/${course.id}`}
                    className="btn btn-primary text-sm"
                  >
                    Enroll Now
                  </Link>
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Courses; 