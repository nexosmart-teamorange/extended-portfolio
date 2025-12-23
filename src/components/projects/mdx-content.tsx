import { MDXRemote } from "next-mdx-remote/rsc";

const components = {
    h2: (props: any) => <h2 className="text-2xl font-semibold mt-8 mb-3" {...props} />,
    ul: (props: any) => <ul className="list-disc pl-6 space-y-1" {...props} />,

    Accent: ({ children }: { children: React.ReactNode }) => (
        <span className="font-medium text-accent">
            {children}
        </span>
    ),
    // add buttons, alerts, etc.
};

export default function MDXContent({ source }: { source: string }) {
    return <MDXRemote source={source} components={components} />;
}