interface SectionHeadingProps {
  title: string;
  maintitle?: string;
  subtitle: string;
  description: string;
}

const SectionHeading = ({ title, subtitle, description, maintitle } : SectionHeadingProps) => {
  return (
    <div className="max-w-3xl mx-auto text-center mb-16">
      <span className="text-light-sea-green uppercase tracking-wider text-sm font-medium">{subtitle}</span>
      <h2 className="text-4xl font-bold mt-2 mb-4 text-white">
        {title}{' '}
        <span className="bg-gradient-to-r from-shining-yellow to-bright-orange bg-clip-text text-transparent">
          {maintitle}
        </span>
      </h2>
      <p className="text-gray-300 text-lg">
        {description}
      </p>
    </div>
  )
}

export default SectionHeading