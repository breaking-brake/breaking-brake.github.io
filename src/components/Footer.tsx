import { Box, Container, Flex, Link, Separator, Text } from '@radix-ui/themes'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <Box asChild>
      <footer
        style={{
          borderTop: '1px solid var(--gray-a5)',
          background: 'var(--gray-a2)',
        }}
      >
        <Container size="4">
          <Flex direction="column" py="6" gap="4">
            <Flex justify="between" align="center" wrap="wrap" gap="4">
              <Text size="2" color="gray">
                &copy; {currentYear} Claude Code Workflow Studio. All rights
                reserved.
              </Text>

              <Flex asChild gap="4" align="center">
                <nav>
                  <Link
                    href="https://github.com/breaking-brake/cc-wf-studio"
                    target="_blank"
                    size="2"
                  >
                    Project GitHub
                  </Link>
                  <Link
                    href="https://github.com/breaking-brake/breaking-brake.github.io"
                    target="_blank"
                    size="2"
                  >
                    Blog GitHub
                  </Link>
                  <Link
                    href="https://docs.anthropic.com/claude/docs/claude-code"
                    target="_blank"
                    size="2"
                  >
                    Claude Code Docs
                  </Link>
                </nav>
              </Flex>
            </Flex>

            <Separator size="4" />

            <Text size="1" color="gray" align="center">
              Powered by Astro, React, and Radix UI
            </Text>
          </Flex>
        </Container>
      </footer>
    </Box>
  )
}
