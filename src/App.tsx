const assetPathPrefix = "/assets";
const imgHeroPanel = `${assetPathPrefix}/d24fa.png`;
const imgLeaf = `${assetPathPrefix}/d1289.svg`;
const imgShield = `${assetPathPrefix}/9074d.svg`;
const imgChevronRight = `${assetPathPrefix}/0bf58.svg`;
const imgChevronRightRed = `${assetPathPrefix}/3d4f3.svg`;
const imgAlertTriangle = `${assetPathPrefix}/0cdd9.svg`;
const imgCheck = `${assetPathPrefix}/af8de.svg`;
const imgLine = `${assetPathPrefix}/4a384.svg`;
const imgLine1 = `${assetPathPrefix}/92aea.svg`;

function FieldRow({ label, value, error, placeholder }: { label: string; value?: string; error?: boolean; placeholder?: boolean }) {
  return (
    <div className="flex flex-col gap-[8px] items-start w-full">
      <p className={`font-['Inter:Bold'] font-bold leading-normal text-[11px] uppercase w-full ${error ? 'text-[#d32f2f]' : 'text-[rgba(19,32,26,0.56)]'}`}>
        {label}
      </p>
      <div className={`border-b border-solid flex items-center justify-between pb-[12px] w-full ${error ? 'border-[#d32f2f]' : 'border-[rgba(19,32,26,0.13)]'}`}>
        <p className={`font-['Inter:Medium'] font-medium leading-normal text-[15px] whitespace-nowrap ${placeholder ? 'text-[rgba(19,32,26,0.31)]' : 'text-[#13201a]'}`}>
          {value}
        </p>
        <div className="shrink-0 size-[16px] relative">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={error ? imgChevronRightRed : imgChevronRight} />
        </div>
      </div>
    </div>
  );
}

function Divider({ src }: { src: string }) {
  return (
    <div className="h-0 relative shrink-0 w-full">
      <div className="absolute inset-[-1px_0_0_0]">
        <img alt="" className="block max-w-none size-full" src={src} />
      </div>
    </div>
  );
}

function Button({ label }: { label: string }) {
  return (
    <div className="bg-[#dceb6b] drop-shadow-[0px_1px_2px_rgba(0,0,0,0.05)] flex font-['Inter:Bold'] font-bold gap-[8px] items-center justify-center px-[28px] py-[14px] rounded-[999px] w-full cursor-pointer">
      <span className="text-[#13201a] text-[15px]">{label}</span>
      <span className="text-[#13201a] text-[16px]">↗</span>
    </div>
  );
}

function HeroPanel() {
  return (
    <div className="relative bg-[#13201a] flex flex-col items-start justify-between p-[48px] min-h-screen lg:min-h-0 lg:h-full">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgHeroPanel} />
        <div className="absolute bg-[rgba(19,32,26,0.65)] inset-0" />
      </div>
      {/* Top branding */}
      <div className="relative flex flex-col gap-[12px] items-start">
        <div className="flex gap-[8px] items-center">
          <div className="bg-[#dceb6b] flex items-center justify-center rounded-[999px] shrink-0 size-[32px]">
            <div className="relative shrink-0 size-[16px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLeaf} />
            </div>
          </div>
          <p className="font-['Inter:Extra Bold'] font-extrabold leading-normal text-[22px] text-white whitespace-nowrap">
            NativaTrips
          </p>
        </div>
        <div className="bg-[rgba(220,235,107,0.13)] flex items-start px-[10px] py-[4px] rounded-[6px]">
          <p className="font-['Inter:Bold'] font-bold leading-normal text-[#dceb6b] text-[11px] whitespace-nowrap">
            PNN CHINGAZA · COLOMBIA
          </p>
        </div>
      </div>
      {/* Bottom copy */}
      <div className="relative flex flex-col gap-[24px] items-start mt-16">
        <div className="font-['Inter:Extra Bold'] font-extrabold text-[36px] text-white leading-[1.1]">
          <p>Viaja con</p>
          <p>propósito,</p>
          <p>protege la tierra.</p>
        </div>
        <p className="font-['Inter:Regular'] font-normal leading-[1.5] text-[15px] text-[rgba(255,255,255,0.75)]">
          Accede a tu cuenta nativa para gestionar tus reservas de ecoturismo responsable en la cordillera oriental colombiana.
        </p>
        <div className="flex gap-[12px] items-center">
          <div className="relative shrink-0 size-[16px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShield} />
          </div>
          <p className="font-['Inter:Medium'] font-medium leading-normal text-[#dceb6b] text-[13px] whitespace-nowrap">
            Operador Autorizado PNN Chingaza
          </p>
        </div>
      </div>
    </div>
  );
}

function FormsArea() {
  return (
    <div className="flex flex-col gap-[48px] items-start p-[64px] w-full bg-[#f5f5f0] min-h-screen">
      {/* Header */}
      <div className="flex items-end justify-between w-full flex-wrap gap-4">
        <div className="flex flex-col gap-[6px] items-start">
          <p className="font-['Inter:Bold'] font-bold text-[12px] text-[rgba(19,32,26,0.5)] uppercase">
            PANEL DE CONTROL GENERAL
          </p>
          <p className="font-['Inter:Extra Bold'] font-extrabold text-[#13201a] text-[32px]">
            Flujos de Autenticación
          </p>
        </div>
        <div className="bg-[rgba(19,32,26,0.06)] flex items-start px-[12px] py-[6px] rounded-[8px]">
          <p className="font-['Inter:Semi Bold'] font-semibold leading-normal text-[#13201a] text-[12px] whitespace-nowrap">
            Navegación Interactiva Simulada
          </p>
        </div>
      </div>

      {/* Section 1: Login */}
      <div className="flex flex-col gap-[16px] items-start w-full">
        <p className="font-['Inter:Bold'] font-bold leading-normal text-[14px] text-[rgba(19,32,26,0.5)] uppercase">
          1. Estado de Inicio de Sesión (Login)
        </p>
        <div className="flex gap-[32px] items-start w-full flex-wrap lg:flex-nowrap">
          {/* Normal login */}
          <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-1 flex-col gap-[28px] items-start min-w-[280px] p-[32px] rounded-[24px]">
            <div className="flex flex-col gap-[8px] items-start w-full">
              <p className="font-['Inter:Bold'] font-bold leading-normal text-[#13201a] text-[12px] uppercase w-full">
                ACCESO ECOTURISTA
              </p>
              <p className="font-['Inter:Extra Bold'] font-extrabold leading-[1.1] text-[#13201a] text-[28px] w-full">
                Iniciar sesión
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-normal text-[14px] text-[rgba(19,32,26,0.5)] w-full">
                Ingresa tus credenciales para continuar tu aventura
              </p>
            </div>
            <div className="flex flex-col gap-[20px] items-start w-full">
              <FieldRow label="Usuario o Correo Electrónico" value="senderista.andino@gmail.com" />
              <FieldRow label="Contraseña" value="••••••••••••••" />
            </div>
            <div className="flex flex-col gap-[16px] items-center w-full">
              <Button label="Iniciar sesión" />
              <p className="font-['Inter:Semi Bold'] font-semibold text-[13px] text-[rgba(19,32,26,0.5)] underline decoration-solid underline-offset-auto cursor-pointer">
                ¿Olvidaste tu contraseña?
              </p>
            </div>
            <Divider src={imgLine} />
            <div className="flex gap-[6px] items-start justify-center text-[13px] w-full">
              <p className="font-['Inter:Regular'] font-normal text-[rgba(19,32,26,0.44)]">¿No tienes cuenta?</p>
              <p className="font-['Inter:Bold'] font-bold text-[#13201a] underline decoration-solid cursor-pointer">Regístrate</p>
            </div>
          </div>

          {/* Error login */}
          <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-1 flex-col gap-[28px] items-start min-w-[280px] p-[32px] rounded-[24px]">
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-1 flex-col gap-[8px] items-start min-w-0 text-[#13201a]">
                <p className="font-['Inter:Bold'] font-bold leading-normal text-[12px] uppercase w-full">VISTA DE ERROR</p>
                <p className="font-['Inter:Extra Bold'] font-extrabold leading-[1.1] text-[28px] w-full">Iniciar sesión</p>
              </div>
              <div className="bg-[rgba(211,47,47,0.08)] flex items-start px-[8px] py-[4px] rounded-[6px] shrink-0">
                <p className="font-['Inter:Bold'] font-bold leading-normal text-[#d32f2f] text-[10px] uppercase whitespace-nowrap">Alerta</p>
              </div>
            </div>
            <div className="flex flex-col gap-[20px] items-start w-full">
              <FieldRow label="Usuario o Correo Electrónico" value="senderista.incorrecto@gmail.com" error />
              <FieldRow label="Contraseña" value="••••" error />
              <div className="bg-[rgba(211,47,47,0.06)] flex gap-[8px] items-center p-[12px] rounded-[8px] w-full">
                <div className="relative shrink-0 size-[14px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAlertTriangle} />
                </div>
                <p className="flex-1 font-['Inter:Semi Bold'] font-semibold leading-normal min-w-0 text-[#d32f2f] text-[12px]">
                  Credenciales inválidas. Verifica tu email y contraseña.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[16px] items-center w-full">
              <Button label="Iniciar sesión" />
              <p className="font-['Inter:Semi Bold'] font-semibold text-[13px] text-[rgba(19,32,26,0.5)] underline decoration-solid cursor-pointer">
                ¿Olvidaste tu contraseña?
              </p>
            </div>
            <Divider src={imgLine} />
            <div className="flex gap-[6px] items-start justify-center text-[13px] w-full">
              <p className="font-['Inter:Regular'] font-normal text-[rgba(19,32,26,0.44)]">¿No tienes cuenta?</p>
              <p className="font-['Inter:Bold'] font-bold text-[#13201a] underline decoration-solid cursor-pointer">Regístrate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Sign Up */}
      <div className="flex flex-col gap-[16px] items-start w-full">
        <p className="font-['Inter:Bold'] font-bold leading-normal text-[14px] text-[rgba(19,32,26,0.5)] uppercase">
          2. Formulario de Registro Completo (Sign Up)
        </p>
        <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[28px] items-start p-[32px] rounded-[24px] w-full">
          <div className="flex flex-col gap-[8px] items-start w-full">
            <p className="font-['Inter:Bold'] font-bold leading-normal text-[#13201a] text-[12px] uppercase w-full">ÚNETE A LA RED</p>
            <p className="font-['Inter:Extra Bold'] font-extrabold leading-[1.1] text-[#13201a] text-[28px] w-full">Crear nueva cuenta</p>
            <p className="font-['Inter:Regular'] font-normal leading-normal text-[14px] text-[rgba(19,32,26,0.5)] w-full">
              Regístrate gratis para comenzar a planear tu viaje a Chingaza
            </p>
          </div>
          <div className="flex flex-col gap-[20px] items-start w-full">
            <div className="flex gap-[24px] items-start w-full flex-wrap sm:flex-nowrap">
              <div className="flex-1 min-w-[200px]">
                <FieldRow label="Nombre Completo" value="Escribe tu nombre" placeholder />
              </div>
              <div className="flex-1 min-w-[200px]">
                <FieldRow label="Email / Correo Electrónico" value="ejemplo@nativatrips.com" placeholder />
              </div>
            </div>
            <div className="flex gap-[24px] items-start w-full flex-wrap sm:flex-nowrap">
              <div className="flex-1 min-w-[160px]">
                <FieldRow label="Teléfono de Contacto" value="+57 300 000 0000" placeholder />
              </div>
              <div className="flex-1 min-w-[160px]">
                <FieldRow label="Contraseña" value="Mínimo 8 caracteres" placeholder />
              </div>
              <div className="flex-1 min-w-[160px]">
                <FieldRow label="Confirmar Contraseña" value="Repite tu contraseña" placeholder />
              </div>
            </div>
            <div className="flex gap-[12px] items-center w-full">
              <div className="border border-[rgba(19,32,26,0.19)] border-solid flex items-center justify-center rounded-[4px] shrink-0 size-[20px]">
                <div className="relative shrink-0 size-[12px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCheck} />
                </div>
              </div>
              <p className="flex-1 font-['Inter:Regular'] font-normal leading-normal min-w-0 text-[13px] text-[rgba(19,32,26,0.5)]">
                <span>Acepto los </span>
                <span className="text-[#13201a] underline decoration-solid cursor-pointer">Términos y Condiciones</span>
                <span> y la </span>
                <span className="text-[#13201a] underline decoration-solid cursor-pointer">Política de Privacidad</span>
                <span> de NativaTrips.</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[16px] items-center w-full">
            <Button label="Crear cuenta" />
            <Divider src={imgLine1} />
            <div className="flex gap-[6px] items-start justify-center text-[13px] w-full">
              <p className="font-['Inter:Regular'] font-normal text-[rgba(19,32,26,0.44)]">¿Ya tienes cuenta?</p>
              <p className="font-['Inter:Bold'] font-bold text-[#13201a] underline decoration-solid cursor-pointer">Inicia sesión</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Password Recovery */}
      <div className="flex flex-col gap-[16px] items-start w-full">
        <p className="font-['Inter:Bold'] font-bold leading-normal text-[14px] text-[rgba(19,32,26,0.5)] uppercase">
          3. Proceso de Recuperación de Contraseña (Dos Pasos)
        </p>
        <div className="flex gap-[32px] items-start w-full flex-wrap lg:flex-nowrap">
          {/* Step 1 */}
          <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-1 flex-col gap-[28px] items-start min-w-[280px] p-[32px] rounded-[24px]">
            <div className="flex flex-col gap-[8px] items-start w-full">
              <p className="font-['Inter:Bold'] font-bold leading-normal text-[#13201a] text-[12px] uppercase w-full">PASO 1: SOLICITUD</p>
              <p className="font-['Inter:Extra Bold'] font-extrabold leading-[1.1] text-[#13201a] text-[28px] w-full">Recuperar contraseña</p>
              <p className="font-['Inter:Regular'] font-normal leading-normal text-[14px] text-[rgba(19,32,26,0.5)] w-full">
                Te enviaremos un enlace de recuperación seguro
              </p>
            </div>
            <FieldRow label="Introduce tu Correo Registrado" value="senderista.andino@gmail.com" />
            <div className="flex flex-col gap-[16px] items-center w-full">
              <Button label="Enviar enlace" />
              <Divider src={imgLine} />
              <p className="font-['Inter:Bold'] font-bold leading-normal text-[#13201a] text-[13px] underline decoration-solid cursor-pointer whitespace-nowrap">
                Volver al inicio de sesión
              </p>
            </div>
          </div>
          {/* Step 2 */}
          <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-1 flex-col gap-[28px] items-start min-w-[280px] p-[32px] rounded-[24px]">
            <div className="flex flex-col gap-[8px] items-start w-full">
              <p className="font-['Inter:Bold'] font-bold leading-normal text-[#13201a] text-[12px] uppercase w-full">PASO 2: CAMBIO</p>
              <p className="font-['Inter:Extra Bold'] font-extrabold leading-[1.1] text-[#13201a] text-[28px] w-full">Definir nueva contraseña</p>
              <p className="font-['Inter:Regular'] font-normal leading-normal text-[14px] text-[rgba(19,32,26,0.5)] w-full">
                Configura la clave de acceso para tu cuenta
              </p>
            </div>
            <div className="flex flex-col gap-[20px] items-start w-full">
              <FieldRow label="Nueva Contraseña" value="Ingresa nueva clave" placeholder />
              <FieldRow label="Confirmar Contraseña" value="Repite tu nueva clave" placeholder />
            </div>
            <div className="flex flex-col gap-[16px] items-center w-full">
              <Button label="Guardar contraseña" />
              <Divider src={imgLine} />
              <p className="font-['Inter:Bold'] font-bold leading-normal text-[#13201a] text-[13px] underline decoration-solid cursor-pointer whitespace-nowrap">
                Volver al inicio de sesión
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="flex min-h-screen w-full">
      <div className="hidden lg:flex lg:w-[380px] xl:w-[440px] shrink-0">
        <HeroPanel />
      </div>
      <div className="flex-1 overflow-y-auto">
        <FormsArea />
      </div>
    </div>
  );
}
