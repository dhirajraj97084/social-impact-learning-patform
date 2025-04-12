import { motion } from 'framer-motion';

const About = () => {
  const features = [
    {
      title: 'Expert Instructors',
      description: 'Learn from industry professionals with years of experience',
      icon: '👨‍🏫',
    },
    {
      title: 'Flexible Learning',
      description: 'Study at your own pace with 24/7 access to course materials',
      icon: '⏰',
    },
    {
      title: 'Practical Projects',
      description: 'Build real-world projects to enhance your portfolio',
      icon: '💻',
    },
    {
      title: 'Community Support',
      description: 'Join a community of learners and get help when needed',
      icon: '🤝',
    },
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About TechLearn</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are dedicated to making future technology education accessible to
            everyone. Our mission is to empower individuals with the skills they
            need to thrive in the digital age.
          </p>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card text-center"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white rounded-2xl p-8 md:p-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg">
            At TechLearn, we believe that education should be accessible,
            engaging, and practical. Our goal is to bridge the gap between
            traditional education and the rapidly evolving tech industry by
            providing high-quality, up-to-date courses that prepare our students
            for the future.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About; 