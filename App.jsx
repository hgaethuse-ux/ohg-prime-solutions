const Card = ({ children }) => (
  <div className="bg-gray-800 p-4 rounded-2xl">{children}</div>
);

const CardContent = ({ children }) => <div>{children}</div>;

const Button = ({ children }) => (
  <button className="bg-blue-600 px-4 py-2 rounded-2xl">
    {children}
  </button>
);
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      {/* Header */}
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-2xl font-bold">OHG Prime Solutions</h1>
        <Button className="rounded-2xl">Contact Us</Button>
      </header>

      {/* Hero Section */}
      <section className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-4"
        >
          Building Smart Apps & Digital Solutions
        </motion.h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          We design and develop modern applications that help businesses grow and scale efficiently.
        </p>
        <a href="https://wa.me/267XXXXXXXX">
  <Button>Get Started</Button>
</a>
      </section>

      {/* Services Section */}
      <section className="grid md:grid-cols-3 gap-6 mb-16">
        <Card className="rounded-2xl">
          <CardContent className="p-4">
            <h3 className="text-xl font-semibold mb-2">App Development</h3>
            <p className="text-gray-400">
              Custom mobile and web applications tailored to your needs.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl">
          <CardContent className="p-4">
            <h3 className="text-xl font-semibold mb-2">Web Design</h3>
            <p className="text-gray-400">
              Modern, responsive websites that represent your brand.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl">
          <CardContent className="p-4">
            <h3 className="text-xl font-semibold mb-2">IT Solutions</h3>
            <p className="text-gray-400">
              Reliable digital services to support your business operations.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* App Development Showcase */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Our App Development Process</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {["Idea", "Design", "Development", "Launch"].map((step, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-4 rounded-2xl text-center"
            >
              <h4 className="font-semibold">{step}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <h2 className="text-2xl font-bold mb-4">Have an App Idea?</h2>
        <p className="text-gray-400 mb-6">
          Let OHG Prime Solutions bring your vision to life.
        </p>
        <Button className="rounded-2xl">Start Your Project</Button>
      </section>
    </div>
  );
}
