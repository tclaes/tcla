import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, expect, test } from 'vitest';
import Index from '../../src/pages/index.astro';
import Projecten from '../../src/pages/projecten.astro';

const render = (Component: typeof Index) => (container: AstroContainer) =>
  container.renderToString(Component);

describe('pagina-teksten', () => {
  test('homepage-CTA is correct Nederlands zonder "beschaalbars"', async () => {
    const container = await AstroContainer.create();
    const html = await render(Index)(container);

    expect(html).toContain('Bouwen we iets dat');
    expect(html).toContain('>meegaat<');
    expect(html).not.toContain('beschaalbars');
  });

  test('projecten-footnote kondigt beschikbaarheid op aanvraag correct aan', async () => {
    const container = await AstroContainer.create();
    const html = await render(Projecten)(container);

    expect(html).toContain('op aanvraag beschikbaar');
    expect(html).not.toContain('aantoonbaar');
  });
});
