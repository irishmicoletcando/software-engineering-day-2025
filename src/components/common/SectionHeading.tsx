interface SectionHeadingProps {
  title: string;
  subtitle: string;
  description: string;
}

const SectionHeading = ({ title, subtitle, description } : SectionHeadingProps) => {
  return (
    <div className="max-w-3xl mx-auto text-center mb-16">
      <span className="text-accent-blue uppercase tracking-wider text-sm font-medium">{subtitle}</span>
      <h2 className="text-4xl font-bold mt-2 mb-4 text-white">{title}</h2>
      <p className="text-gray-300 text-lg">
        {description}
      </p>
    </div>
  )
}

export default SectionHeading